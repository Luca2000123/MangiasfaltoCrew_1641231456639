// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { EventComponent} from './pages/event/event.component';
import { IndexComponent} from './pages/index/index.component';
import { LoginComponent} from './pages/login/login.component';
import { PhotoComponent} from './pages/photo/photo.component';
import { ShopComponent} from './pages/shop/shop.component';
import { ToolComponent} from './pages/tool/tool.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'event',  loadChildren: './pages/event/event.module#EventModule'  },
    { path: 'index',  loadChildren: './pages/index/index.module#IndexModule'  },
    { path: 'login',  loadChildren: './pages/login/login.module#LoginModule'  },
    { path: 'photo',  loadChildren: './pages/photo/photo.module#PhotoModule'  },
    { path: 'shop',  loadChildren: './pages/shop/shop.module#ShopModule'  },
    { path: 'tool',  loadChildren: './pages/tool/tool.module#ToolModule'  },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
