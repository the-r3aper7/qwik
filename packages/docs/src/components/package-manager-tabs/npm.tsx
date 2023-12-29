import { component$ } from '@builder.io/qwik';

export interface IconProps {
  width: number;
  height: number;
}

export const NpmIcon = component$(({ width = 630, height = 630 }: IconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 630 630"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
  >
    <rect width="630" height="630" fill="url(#pattern0)" />
    <defs>
      <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
        <use xlink:href="#image0_13_2" transform="scale(0.0015873)" />
      </pattern>
      <image
        id="image0_13_2"
        width="630"
        height="630"
        xlink:href="data:image/png;base64,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iBB2AAARwg4AIELYAQBECDsAgAhhBwAQIewAACKEHQBAhLADAIgQdgAAEcIOACBC2AEARAg7AIAIYQcAECHsAAAihB0AQISwAwCIEHYAABHCDgAgQtgBAEQIOwCACGEHABAh7AAAIoQdAECEsAMAiBB2AAARwg4AIELYAQBECDsAgAhhBwAQIewAACKEHQBAhLADAIgQdgAAEcIOACBC2AEARAg7AIAIYQcAECHsAAAihB0AQISwAwCIEHYAABHCDgAgQtgBAEQIOwCACGEHABAh7AAAIoQdAECEsAMAiBB2AAARwg4AIELYAQBECDsAgAhhBwAQIewAACKEHQBAhLADAIgQdgAAEcIOACBC2AEARAg7AIAIYQcAECHsAAAihB0AQISwAwCIEHYAABHCDgAgQtgBAEQIOwCACGEHABAh7AAAIoQdAECEsAMAiBB2AAARwg4AIELYAQBECDsAgAhhBwAQIewAACKEHQBAhLADAIgQdgAAEcIOACBC2AEARAg7AIAIYQcAECHsAAAihB0AQISwAwCIEHYAABHCDgAgQtgBAEQIOwCACGEHABAh7AAAIoQdAECEsAMAiBB2AAARwg4AIELYAQBECDsAgAhhBwAQIewAACKEHQBAhLADAIgQdgAAEcIOACBC2AEARAg7AIAIYQcAECHsAAAihB0AQISwAwCIEHYAABHCDgAgQtgBAEQIOwCACGEHABAh7AAAIoQdAECEsAMAiBB2AAARwg4AIELYAQBECDsAgAhhBwAQIewAACKEHQBAhLADAIgQdgAAEcIOACBC2AEARAg7AIAIYQcAECHsAAAihB0AQISwAwCIEHYAABHCDgAgQtgBAEQIOwCACGEHABAh7AAAIoQdAECEsAMAiBB2AAARwg4AIELYAQBECDsAgAhhBwAQIewAACKEHQBAhLADAIgQdgAAEcIOACBC2AEARAg7AIAIYQcAECHsAAAihB0AQISwAwCIEHYAABHCDgAgQtgBAEQIOwCACGEHABAh7AAAIoQdAECEsAMAiBB2AAARwg4AIELYAQBECDsAgAhhBwAQIewAACKEHQBAhLADAIgQdgAAEcIOACBC2AEARAg7AIAIYQcAECHsAAAihB0AQISwAwCIEHYAABHCDgAgQtgBAEQIOwCACGEHABAh7AAAIoQdAECEsAMAiBB2AAARwg4AIELYAQBECDsAgAhhBwAQIewAACKEHQBAhLADAIgQdgAAEcIOACBC2AEARAg7AIAIYQcAECHsAAAihB0AQISwAwCIEHYAABHCDgAgQtgBAEQIO76wXq3Ger2eB/M1j12ub/7668Gen2d2Z71d9//6Plxf55qf6c1evdmz4Z+mo/nx2I6XZZpsxmfgwq1b49KdO2Pa0/x0fHr7dvz+5MlYvXu3neG0nLt8efx49+44d/HidobTsom6N4eH4/3x8XaGnVlwowg7/sWqUzTvKOyIPWR3PNdnRNidgLADAJZowY3ifRsAQISwAwCIEHYAABHCDgAgQtgBAEQIOwCACGEHABAh7AAAIoQdAECEsAMAiBB2AAARwg4AIELYAQBECDsAgAhhBwAQIewAACKEHQBAhLADAIgQdgAAEcIOACBC2AEARAg7AIAIYQcAECHsAAAihB0AQISwAwCIEHYAABHCDgAgQtgBAEQIOwCACGEHABAh7AAAIoQdAECEsAMAiBB2AAARwg4AIELYAQBECDsAgAhhBwAQIewAACKEHQBAhLADAIgQdgAAEcIOACBC2AEARAg7AIAIYQcAECHsAAAihB0AQISwAwCIEHYAABHCDgAgQtgBAEQIOwCACGEHABAh7AAAIoQdAECEsAMAiBB2AAARwg4AIELYAQBECDsAgAhhBwAQIewAACKEHQBAhLADAIgQdgAAEcIOACBC2AEARAg7AIAIYQcAECHsAAAihB0AQISwAwCIEHYAABHCDgAgQtgBAEQIOwCACGEHABAh7AAAIoQdAECEsAMAiBB2AAARwg4AIELYAQBECDsAgAhhBwAQIewAACKEHQBAhLADAIgQdgAAEdPRGOvteFn25uZcL/PWAIDv2DSNsVptPyzLcsMOAID/xatYAIAIYQcAECHsAAAihB0AQISwAwCIEHYAABHCDgAgQtgBAEQIOwCACGEHABAh7AAAIoQdAECEsAMAiBB2AAARwg4AIELYAQBECDsAgAhhBwAQIewAACKEHQBAhLADAIgQdgAAEcIOACBC2AEARAg7AIAIYQcAECHsAAAihB0AQISwAwCIEHYAABHCDgAgQtgBAEQIOwCACGEHABAh7AAAIoQdAECEsAMASBjjT53R4qbnekMRAAAAAElFTkSuQmCC"
      />
    </defs>
  </svg>
));
