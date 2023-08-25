import { App } from 'vue';
import SvgIcon from '@/components/SvgIcon/SvgIcon.vue';
import ErrorComponent from '@/components/ErrorComponent/ErrorComponent.vue';
import AppSelect from '@/components/AppSelect/AppSelect.vue';
import FormElement from '@/components/FormElement/FormElement.vue';
import AppPopup from '@/components/AppPopup/AppPopup.vue';

const globalComponents = (app: App) => {
  app.component('SvgIcon', SvgIcon);
  app.component('ErrorComponent', ErrorComponent);
  app.component('AppSelect', AppSelect);
  app.component('FormElement', FormElement);
  app.component('AppPopup', AppPopup);
};
export default globalComponents;
