interface DatasetsModel {
  data: number[];
  borderColor: string;
  tension: number;
  fill?: boolean;
  yAxisID?: string;
  xAxisID?: string;
}

interface DisplayModel {
  display: boolean;
}

interface ScalesModel {
  x: DisplayModel;
  y: DisplayModel;
}

interface LegendModel extends DisplayModel {
  labels?: string;
}

interface PluginsModel {
  legend: LegendModel;
  tooltip: {
    enabled: boolean;
  };
}

interface PointModel {
  radius: number;
}

interface lineModel {
  tension: number;
}

interface ElementsModel {
  point: PointModel;
  line: lineModel;
}

export interface OptionsChartModel {
  maintainAspectRatio: boolean;
  aspectRatio: number;
  plugins: PluginsModel;
  scales: ScalesModel;
  elements: ElementsModel;
}

export interface DataChartModel {
  labels: Array<number | string>;
  datasets: DatasetsModel[];
}
