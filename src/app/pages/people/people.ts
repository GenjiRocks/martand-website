import { Component, computed, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { TEAM_MEMBERS, TeamMember } from '../../data/martand-data';

@Component({
  selector: 'app-people',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './people.html',
  styleUrls: ['./people.css']
})
export class PeopleComponent {
  readonly teamMembers = TEAM_MEMBERS;
  readonly selectedOffice = signal<string>('All offices');
  readonly selectedDiscipline = signal<string>('All');
  readonly searchQuery = signal<string>('');
  
  // Modal for viewing lawyer profile
  readonly activeProfile = signal<TeamMember | null>(null);

  readonly filteredMembers = computed(() => {
    const office = this.selectedOffice();
    const query = this.searchQuery().toLowerCase().trim();

    return this.teamMembers.filter(member => {
      const matchOffice = office === 'All offices' || member.office === office;
      const matchQuery = !query || 
        member.name.toLowerCase().includes(query) ||
        member.practiceArea.toLowerCase().includes(query) ||
        member.discipline.toLowerCase().includes(query);
      return matchOffice && matchQuery;
    });
  });

  setOffice(office: string): void {
    this.selectedOffice.set(office);
  }

  openProfile(member: TeamMember): void {
    this.activeProfile.set(member);
  }

  closeProfile(): void {
    this.activeProfile.set(null);
  }
}
