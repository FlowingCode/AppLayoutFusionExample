import '@vaadin/vaadin-app-layout';
import "@vaadin/flow-frontend/fc-applayout/fc-fusion-layout";
import { FusionLayout } from "@vaadin/flow-frontend/fc-applayout/fc-fusion-layout";
import '@vaadin/vaadin-avatar/vaadin-avatar';
import '@vaadin/vaadin-context-menu';
import '@vaadin/vaadin-tabs';
import '@vaadin/vaadin-tabs/vaadin-tab';
import '@vaadin/vaadin-template-renderer';
import { html } from 'lit';
import { query } from 'lit-element';
import { customElement } from 'lit/decorators.js';
import { router } from '../index';
import { views } from '../routes';
import { Layout } from './view';

interface RouteInfo {
  path: string;
  title: string;
  icon: string;
}

@customElement('main-layout')
export class MainLayout extends Layout {

  @query("fc-fusion-layout")
  layout!: FusionLayout;

  render() {
    return html`
    <fc-fusion-layout swipeOpen fixed 
                      userName="A given user" title="Social App"
                      appLogo="images/logo.png"
                      profilePicture="icons/icon.png">
		  <slot></slot>
	  </fc-fusion-layout>`;
  }

  connectedCallback() {
    super.connectedCallback();
    this.classList.add('block', 'h-full');
  }

  firstUpdated() {
    this.layout.router = router;
  }

  private getMenuRoutes(): RouteInfo[] {
    return views.filter((route) => route.title) as RouteInfo[];
  }
}
