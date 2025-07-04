import React from 'react';
import { Form, Checkbox, Space } from 'antd';
import { useTranslation } from '@/utils/i18n';

const useHostFormItems = () => {
  const { t } = useTranslation();

  return {
    getCommonFormItems: (disabledFormItems: Record<string, boolean> = {}) => {
      return (
        <>
          <Form.Item
            label={t('monitor.intergrations.metricType')}
            name="metric_type"
            rules={[
              {
                required: true,
                message: t('common.required'),
              },
            ]}
          >
            <Checkbox.Group disabled={disabledFormItems.metric_type}>
              <Space direction="vertical">
                <Checkbox value="cpu">
                  <span>
                    <span className="w-[80px] inline-block">CPU</span>
                    <span className="text-[var(--color-text-3)] text-[12px]">
                      {t('monitor.intergrations.cpuDes')}
                    </span>
                  </span>
                </Checkbox>
                <Checkbox value="disk">
                  <span>
                    <span className="w-[80px] inline-block">Disk</span>
                    <span className="text-[var(--color-text-3)] text-[12px]">
                      {t('monitor.intergrations.diskDes')}
                    </span>
                  </span>
                </Checkbox>
                <Checkbox value="diskio">
                  <span>
                    <span className="w-[80px] inline-block">Disk IO</span>
                    <span className="text-[var(--color-text-3)] text-[12px]">
                      {t('monitor.intergrations.diskIoDes')}
                    </span>
                  </span>
                </Checkbox>
                <Checkbox value="mem">
                  <span>
                    <span className="w-[80px] inline-block">Memory</span>
                    <span className="text-[var(--color-text-3)] text-[12px]">
                      {t('monitor.intergrations.memoryDes')}
                    </span>
                  </span>
                </Checkbox>
                <Checkbox value="net">
                  <span>
                    <span className="w-[80px] inline-block">Net</span>
                    <span className="text-[var(--color-text-3)] text-[12px]">
                      {t('monitor.intergrations.netDes')}
                    </span>
                  </span>
                </Checkbox>
                <Checkbox value="processes">
                  <span>
                    <span className="w-[80px] inline-block">Processes</span>
                    <span className="text-[var(--color-text-3)] text-[12px]">
                      {t('monitor.intergrations.processesDes')}
                    </span>
                  </span>
                </Checkbox>
                <Checkbox value="system">
                  <span>
                    <span className="w-[80px] inline-block">System</span>
                    <span className="text-[var(--color-text-3)] text-[12px]">
                      {t('monitor.intergrations.systemDes')}
                    </span>
                  </span>
                </Checkbox>
                <Checkbox value="gpu">
                  <span>
                    <span className="w-[80px] inline-block">Nvidia-GPU</span>
                    <span className="text-[var(--color-text-3)] text-[12px]">
                      {t('monitor.intergrations.gpuDes')}
                    </span>
                  </span>
                </Checkbox>
              </Space>
            </Checkbox.Group>
          </Form.Item>
        </>
      );
    },
  };
};
export { useHostFormItems };
