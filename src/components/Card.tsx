import * as React from 'react';
import { css, cx } from 'emotion';
import { STEP_COLORS } from 'const';
import { IoWarningSharp } from 'react-icons/io5';
import { Tooltip } from '@grafana/ui';

export default function Card({ data }: any) {
  const {
    // device_id = null,

    internal_temp = 0,
    internal_status = 0,
    internal_error_text = '',
    lower_internal_temp = '',
    upper_internal_temp = '',

    platen_temp = 0,
    platen_status = 0,
    platen_error_text = '',
    lower_platen_temp = '',
    upper_platen_temp = '',
  } = data;

  return (
    // wrapper
    <div
      className={cx(css`
        color: black;
        min-width: calc((100vw - 180px) / 6);
        background: rgb(211, 211, 211);
        margin: 5px;
        border-radius: 6px;
      `)}
    >
      {/* box */}
      <div
        className={cx(css`
          position: relative;
          border: 1px solid rgb(226, 226, 226);
          min-height: 266px;
          border-radius: 6px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        `)}
      >
        {/* top */}
        <div
          className={cx(css`
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 3px 0px;
          `)}
        >
          <div
            className={cx(css`
              font-size: 1.2vw;
              font-weight: 600;
            `)}
          >
            {/* {device_id} */}
            Demo hệ thống nhiệt độ
          </div>
        </div>

        {/* content first */}
        <div
          className={cx(css`
            position: relative;
            flex: 1 1 0%;
            background: ${STEP_COLORS.find((item) => item.id.toString() === platen_status.toString())?.color ||
            STEP_COLORS[0].color};
            border-radius: 3px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            height: 100%;
            line-height: 1.1;
          `)}
        >
          {/* warning */}
          {platen_error_text && (
            <Tooltip content={platen_error_text} placement="bottom" theme="error">
              <div
                className={cx(css`
                  position: absolute;
                  top: 2px;
                  right: 4px;

                  font-size: 26px;
                  cursor: pointer;

                  animation: blink 0.8s ease-in-out infinite;
                  @keyframes blink {
                    from {
                      opacity: 1;
                      color: orange;
                    }
                    to {
                      opacity: 0;
                    }
                  }
                `)}
              >
                <IoWarningSharp />
              </div>
            </Tooltip>
          )}
          <span
            className={cx(css`
              font-size: 18px;
              color: rgb(255, 255, 255);
              font-weight: 500;
              text-align: center;
              margin-top: 10px;
            `)}
          >
            Khuôn:
          </span>

          <span
            className={cx(css`
              font-size: 48px;
              color: rgb(255, 255, 255);
              font-weight: 600;
              text-align: center;
            `)}
          >
            {platen_temp} <span>&#176;</span>C
          </span>

          <span
            className={cx(css`
              display: block;
              color: rgb(255, 255, 255);
              font-size: 14px;
              font-weight: 400;
              margin: 10px 0;
            `)}
          >
            (Ngưỡng: {lower_platen_temp} - {upper_platen_temp} &#176;C)
          </span>
        </div>

        {/* content second */}
        <div
          className={cx(css`
            position: relative;
            flex: 1 1 0%;
            background: ${STEP_COLORS.find((item) => item.id.toString() === internal_status.toString())?.color ||
            STEP_COLORS[0].color};
            border-radius: 3px;

            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;

            height: 100%;
            margin-top: 18px;
            margin-bottom: 12px;
            line-height: 1.1;
          `)}
        >
          {/* warning */}
          {internal_error_text && (
            <Tooltip content={internal_error_text} placement="bottom" theme="error">
              <div
                className={cx(css`
                  position: absolute;
                  top: 2px;
                  right: 4px;

                  font-size: 26px;
                  cursor: pointer;

                  animation: blink 0.8s ease-in-out infinite;
                  @keyframes blink {
                    from {
                      opacity: 1;
                      color: orange;
                    }
                    to {
                      opacity: 0;
                    }
                  }
                `)}
              >
                <IoWarningSharp />
              </div>
            </Tooltip>
          )}

          <span
            className={cx(css`
              font-size: 18px;
              color: rgb(255, 255, 255);
              font-weight: 500;
              text-align: center;
              margin-top: 10px;
            `)}
          >
            Nội áp:
          </span>

          <span
            className={cx(css`
              font-size: 48px;
              color: rgb(255, 255, 255);
              font-weight: 600;
              text-align: center;
            `)}
          >
            {internal_temp} <span>&#176;</span>C
          </span>

          <span
            className={cx(css`
              display: block;
              color: rgb(255, 255, 255);
              font-size: 14px;
              font-weight: 400;
              margin: 10px 0;
            `)}
          >
            (Ngưỡng: {lower_internal_temp} - {upper_internal_temp} &#176;C)
          </span>
        </div>
      </div>
    </div>
  );
}
