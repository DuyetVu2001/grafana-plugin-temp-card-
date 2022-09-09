import React, { useState } from 'react';
import { PanelProps } from '@grafana/data';
import { SimpleOptions } from 'types';
import { css, cx } from 'emotion';
import { stylesFactory } from '@grafana/ui';
import Card from 'components/Card';
import {
  getOee,
  // updateTempConfig,
  // getTempConfig
} from 'api';
import StepColorExplain from 'components/StepColorExplain';

interface Props extends PanelProps<SimpleOptions> {}

export const SimplePanel: React.FC<Props> = ({ options, data, width, height }) => {
  const styles = getStyles();

  const [oee, setOee] = useState<any>();

  React.useEffect(() => {
    getOee(options.cardsUrl).then((response) => setOee(response.data?.data || []));
  }, [options.cardsUrl, data.series]);

  // React.useEffect(() => {
  //   // get config data to panel option
  //   getTempConfig(options.cardsUrl).then((response) => {
  //     const data: {
  //       upper_mold_temp: number;
  //       lower_mold_temp: number;
  //       upper_pressure_temp: number;
  //       lower_pressure_temp: number;
  //     } = response.data?.data || null;
  //     if (!data) {
  //       return;
  //     }

  //     options.upperKhuon = data.upper_mold_temp;
  //     options.lowerKhuon = data.lower_mold_temp;
  //     options.upperNoiAp = data.upper_pressure_temp;
  //     options.lowerNoiAp = data.lower_pressure_temp;
  //   });
  // }, [data.series, options]);

  // update temp config when input in panel change
  // React.useEffect(() => {
  //   updateTempConfig(options.cardsUrl, {
  //     upper_mold_temp: options.upperKhuon,
  //     lower_mold_temp: options.lowerKhuon,
  //     upper_pressure_temp: options.upperNoiAp,
  //     lower_pressure_temp: options.lowerNoiAp,
  //   });
  // }, [options.cardsUrl, data.series, options.upperKhuon, options.lowerKhuon, options.upperNoiAp, options.lowerNoiAp]);

  return (
    <div
      className={cx(
        styles.wrapper,
        css`
          position: relative;
          display: flex;
          flex-wrap: wrap;
          margin: auto;

          width: ${width}px;
          height: ${height}px;
          overflow: hidden;
        `
      )}
    >
      <StepColorExplain />

      <div
        className={cx(
          styles.wrapper,
          css`
            width: 100%;
            height: ${height - 56}px;
            overflow: auto;
          `
        )}
      >
        <div
          className={cx(
            styles.wrapper,
            css`
              margin-top: 12px;
              display: flex;
              flex-wrap: wrap;
            `
          )}
        >
          {oee?.length > 0 && oee.map((item: any, index: number) => <Card key={index} data={item} />)}
        </div>
      </div>
    </div>
  );
};

const getStyles = stylesFactory(() => {
  return {
    wrapper: css`
      position: relative;
    `,
    svg: css`
      position: absolute;
      top: 0;
      left: 0;
    `,
    textBox: css`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 10px;
    `,
  };
});
