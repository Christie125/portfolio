import { Routes } from '@angular/router';
import { ClubsPage } from './clubs-page/clubs-page';
import { ClubsPageActual } from './clubs-page-actual/clubs-page-actual';
import { AwardsPage } from './awards-page/awards-page';
import { ProjectsPage } from './projects-page/projects-page';

export const routes: Routes = [
    { path: '', component: ClubsPage }, // Home page is now ClubsPage
    { path: 'clubs', component: ClubsPageActual },
    { path: 'awards', component: AwardsPage },
    { path: 'projects', component: ProjectsPage }
];