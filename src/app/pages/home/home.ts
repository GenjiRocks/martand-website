import { Component, OnInit, inject, signal, PLATFORM_ID, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { SiteStateService } from '../../services/site-state';
import { 
  PRACTICE_AREAS, 
  TEAM_MEMBERS, 
  RECOGNITIONS, 
  RECENT_WORK, 
  INSIGHTS, 
  FIRM_FACTS,
  PracticeArea 
} from '../../data/martand-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent implements OnInit, AfterViewInit {
  protected readonly state = inject(SiteStateService);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly elementRef = inject(ElementRef);

  readonly practiceAreas = PRACTICE_AREAS;
  readonly teamMembers = TEAM_MEMBERS.slice(0, 4);
  readonly recognitions = RECOGNITIONS;
  readonly recentWork = RECENT_WORK.slice(0, 3);
  readonly insights = INSIGHTS.slice(0, 3);
  readonly facts = FIRM_FACTS;

  // Selected practice area for interactive picker
  readonly selectedArea = signal<PracticeArea>(PRACTICE_AREAS[0]);

  // Facts counter animated values
  readonly counterValues = signal<number[]>([2000, 0, 0, 0]);

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.initIntersectionObserver();
    }
  }

  selectArea(area: PracticeArea): void {
    this.selectedArea.set(area);
  }

  openConsultationModal(practiceAreaName?: string): void {
    this.state.openConsultation(practiceAreaName || '');
  }

  private initIntersectionObserver(): void {
    const el = this.elementRef.nativeElement as HTMLElement;
    
    // Observer for reveal on scroll
    const revealElements = el.querySelectorAll('.reveal-init');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    revealElements.forEach(item => revealObserver.observe(item));

    // Observer for facts counters
    const factsSection = el.querySelector('#facts-strip');
    if (factsSection) {
      const counterObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          this.animateCounters();
          counterObserver.disconnect();
        }
      }, { threshold: 0.3 });
      counterObserver.observe(factsSection);
    }
  }

  private animateCounters(): void {
    const targets = [2013, 4, 8, 5];
    const duration = 1600; // ms
    const startTime = performance.now();

    const update = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // easeOutCubic
      const ease = 1 - Math.pow(1 - progress, 3);

      const current = [
        Math.floor(2000 + (targets[0] - 2000) * ease),
        Math.floor(targets[1] * ease),
        Math.floor(targets[2] * ease),
        Math.floor(targets[3] * ease)
      ];

      this.counterValues.set(current);

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        this.counterValues.set(targets);
      }
    };

    requestAnimationFrame(update);
  }
}

