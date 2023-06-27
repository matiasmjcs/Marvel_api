import { moduleMetadata, type Meta, type StoryObj } from '@storybook/angular';
import { MatDialogModule } from '@angular/material/dialog';
import { action } from '@storybook/addon-actions';
import { NavComponent } from './nav.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
export const actionsData = {
  openDialog: action('openDialog'),
};

const meta: Meta<NavComponent> = {
  title: 'NavComponent',
  component: NavComponent,
  excludeStories: /.*Data$/,
  render: (args: NavComponent) => ({
    props: {
      ...args,
    },
  }),
  decorators: [
    moduleMetadata({
      imports: [
        MatDialogModule,
        BrowserModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatDialogModule,
      ],
    }),
  ],
};

export default meta;
type Story = StoryObj<NavComponent>;

export const Default: Story = {};
