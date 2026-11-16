import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PRACTICE_AREAS, TEAM_MEMBERS, INSIGHTS, PracticeArea, TeamMember, InsightArticle } from '../../data/martand-data';
import { SiteStateService } from '../../services/site-state';

@Component({
  selector: 'app-practice-areas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './practice-areas.html',
  styleUrls: ['./practice-areas.css']
})
export class PracticeAreasComponent implements OnInit {
  protected readonly state = inject(SiteStateService);
  private readonly route = inject(ActivatedRoute);

  readonly practiceAreas = PRACTICE_AREAS;
  readonly activeArea = signal<PracticeArea>(PRACTICE_AREAS[3]); // Default to FEMA as in screenshot
  readonly contactPerson = signal<TeamMember>(TEAM_MEMBERS[0]);
  readonly relatedInsights = signal<InsightArticle[]>(INSIGHTS.slice(0, 2));

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const areaId = params['id'];
      if (areaId) {
        const found = this.practiceAreas.find(a => a.id === areaId);
        if (found) {
          this.setActiveArea(found);
        }
      }
    });
  }

  setActiveArea(area: PracticeArea): void {
    this.activeArea.set(area);
    
    // Pick an appropriate contact partner
    if (area.id === 'fema-foreign-investment') {
      this.contactPerson.set(TEAM_MEMBERS.find(m => m.id === 'rajesh-verma') || TEAM_MEMBERS[0]);
      this.relatedInsights.set(INSIGHTS.filter(i => i.category === 'FEMA Notes').slice(0, 2));
    } else if (area.id === 'intellectual-property') {
      this.contactPerson.set(TEAM_MEMBERS.find(m => m.id === 'priya-kulkarni') || TEAM_MEMBERS[1]);
      this.relatedInsights.set(INSIGHTS.slice(1, 3));
    } else if (area.id === 'esop-equity' || area.id === 'setting-up-in-india') {
      this.contactPerson.set(TEAM_MEMBERS.find(m => m.id === 'ananya-nair') || TEAM_MEMBERS[3]);
      this.relatedInsights.set(INSIGHTS.filter(i => i.category === 'ESOP Desk' || i.category === 'Company law').slice(0, 2));
    } else {
      this.contactPerson.set(TEAM_MEMBERS[0]);
      this.relatedInsights.set(INSIGHTS.slice(0, 2));
    }
  }

  openConsultation(): void {
    this.state.openConsultation(this.activeArea().name);
  }
}
