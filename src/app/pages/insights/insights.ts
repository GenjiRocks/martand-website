import { Component, computed, signal, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { INSIGHTS, RECENT_WORK, InsightArticle, RecentWorkItem } from '../../data/martand-data';
import { SiteStateService } from '../../services/site-state';

@Component({
  selector: 'app-insights',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './insights.html',
  styleUrls: ['./insights.css']
})
export class InsightsComponent {
  protected readonly state = inject(SiteStateService);
  readonly insights = INSIGHTS;
  readonly recentWork = RECENT_WORK;

  readonly selectedCategory = signal<string>('All');
  readonly searchQuery = signal<string>('');
  readonly activeArticle = signal<InsightArticle | null>(null);

  newsletterEmail = '';
  newsletterConsent = false;

  readonly filteredArticles = computed(() => {
    const cat = this.selectedCategory();
    const query = this.searchQuery().toLowerCase().trim();

    return this.insights.filter(item => {
      const matchCat = cat === 'All' || item.category === cat;
      const matchQuery = !query ||
        item.title.toLowerCase().includes(query) ||
        item.summary.toLowerCase().includes(query) ||
        item.author.toLowerCase().includes(query);
      return matchCat && matchQuery;
    });
  });

  setCategory(cat: string): void {
    this.selectedCategory.set(cat);
  }

  readArticle(article: InsightArticle): void {
    this.activeArticle.set(article);
  }

  closeArticle(): void {
    this.activeArticle.set(null);
  }

  onSubscribeNewsletter(): void {
    if (!this.newsletterEmail || !this.newsletterEmail.includes('@') || !this.newsletterConsent) {
      this.state.showToast('Please enter a valid email and check the consent box.');
      return;
    }

    this.state.showToast('Thank you for subscribing to our legal updates.');
    this.newsletterEmail = '';
    this.newsletterConsent = false;
  }
}

