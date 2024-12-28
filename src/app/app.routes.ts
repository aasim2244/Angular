import { Routes } from '@angular/router';
import { FirstNavbarComponent } from './components/first-navbar/first-navbar.component';
import { TableComponent } from './components/table/table.component';
import { IntraPageComponent } from './components/intra-page/intra-page.component';
import { ParentChildComponent } from './components/parent-child/parent-child.component';
import { AppServerComponent } from './components/app-server/app-server.component';
import { AppS3Component } from './components/app-s3/app-s3.component';
import { UnrelatedComponent } from './components/unrelated/unrelated.component';
import { SiblingsComponent } from './components/siblings/siblings.component';
import { TemplateReferenceVariableComponent } from './components/template-reference-variable/template-reference-variable.component';
import { TemplateFormComponent } from './components/template-form/template-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { NgModelExampleComponent } from './components/ng-model-example/ng-model-example.component';
import { StructuralDirectivesComponent } from './components/structural-directives/structural-directives.component';
import { LifecycleHooksComponent } from './components/lifecycle-hooks/lifecycle-hooks.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { Renderer2Component } from './components/renderer2/renderer2.component';
import { ZonesComponent } from './components/zones/zones.component';
import { AnnotationSelectionsComponent } from './components/annotation-selections/annotation-selections.component';
import { ExternalComponent } from './components/external/external.component';

export const routes: Routes = [
    { path: '', component: FirstNavbarComponent, children: [
        {
          path: 'table', // child route path
          component: TableComponent, // child route component that the router renders
        },
        {
          path: 'temp-ref-var',
          component: TemplateReferenceVariableComponent
        },
        {
          path: 'pipes',
          component: PipesComponent
        },
        {
          path: 'intra',
          component: IntraPageComponent
        },
        {
          path: 'ngmodel',
          component: NgModelExampleComponent
        },
        {
          path: 'structural-directives',
          component: StructuralDirectivesComponent
        },
        {
          path: 'annotation-selection',
          component: AnnotationSelectionsComponent
        },
        {
          path: 'lifecycle-hooks',
          component: LifecycleHooksComponent
        },
        {
          path: 'renderer2',
          component: Renderer2Component
        },
        {
          path: 'zones',
          component: ZonesComponent
        },
        {
          path: 'template',
          component: TemplateFormComponent
        },
        {
          path: 'reactive',
          component: ReactiveFormComponent
        },
        {
          path: 'parent-child',
          component: ParentChildComponent
        },
        {
          path: 'siblings',
          component: SiblingsComponent
        },
        {
          path: 'external',
          component: ExternalComponent
        },
        {
          path: 'unrelated',
          component: UnrelatedComponent
        },
        {
          path: 'app-s3',
          component: AppS3Component
        },
        {
          path: 'app-server',
          component: AppServerComponent 
        }] 
    }
];