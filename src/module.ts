import { PanelPlugin } from '@grafana/data';
import { SimpleOptions } from './types';
import { SimplePanel } from './SimplePanel';

export const plugin = new PanelPlugin<SimpleOptions>(SimplePanel).setPanelOptions((builder) => {
  return builder.addTextInput({
    path: 'cardsUrl',
    name: 'API to render cards',
  });
  // .addRadio({
  //   name: 'Giới hạn nhiệt độ',
  //   path: 'radio',
  //   defaultValue: '1',
  //   settings: {
  //     options: [
  //       { value: '1', label: 'Khuôn' },
  //       { value: '2', label: 'Nội áp' },
  //     ],
  //   },
  // })
  // .addNumberInput({
  //   name: 'Khuôn - Ngưỡng nhiệt độ cao: ',
  //   path: 'upperKhuon',
  // })
  // .addNumberInput({
  //   name: 'Khuôn - Ngưỡng nhiệt độ thấp: ',
  //   path: 'lowerKhuon',
  // })

  // .addNumberInput({
  //   name: 'Nội áp - Ngưỡng nhiệt độ cao: ',
  //   path: 'upperNoiAp',
  // })
  // .addNumberInput({
  //   name: 'Nội áp - Ngưỡng nhiệt độ thấp: ',
  //   path: 'lowerNoiAp',
  // })
});
