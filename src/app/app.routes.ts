import { Routes } from '@angular/router';
import { VoiceChangeComponent } from './components/conversions/voice-change/voice-change.component';
import { HomeComponent } from './components/home/home.component';
import { DegreeChangeComponent } from './components/conversions/degree-change/degree-change.component';
import { TransformationOfSentencesComponent } from './components/conversions/transformation-of-sentences/transformation-of-sentences.component';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent},
    { path: 'conversions/voice-change', component: VoiceChangeComponent},
    { path: 'conversions/degree-change', component: DegreeChangeComponent},
    { path: 'conversions/transformation-of-sentence', component: TransformationOfSentencesComponent}
];
