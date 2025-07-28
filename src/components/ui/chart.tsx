import * as React from "react"
import * as RechartsPrimitive from "recharts"

import { cn } from "@/lib/utils"

// Add a context for custom tooltip props

interface ChartTooltipCustomProps {
  indicator?: "line" | "dot" | "dashed";
  hideLabel?: boolean;
  hideIndicator?: boolean;
  nameKey?: string;
  labelKey?: string;
  labelClassName?: string;
  formatter?: (...args: unknown[]) => React.ReactNode;
  color?: string;
}

const ChartTooltipCustomContext = React.createContext<ChartTooltipCustomProps>({});

export function ChartTooltipCustomProvider({ children, ...props }: React.PropsWithChildren<ChartTooltipCustomProps>) {
  return (
    <ChartTooltipCustomContext.Provider value={props}>
      {children}
    </ChartTooltipCustomContext.Provider>
  );
}

function useChartTooltipCustom() {
  return React.useContext(ChartTooltipCustomContext);
}

// Format: { THEME_NAME: CSS_SELECTOR }
const THEMES = { light: "", dark: ".dark" } as const

export type ChartConfig = {
  [k in string]: {
    label?: React.ReactNode
    icon?: React.ComponentType
  } & (
    | { color?: string; theme?: never }
    | { color?: never; theme: Record<keyof typeof THEMES, string> }
  )
}

type ChartContextProps = {
  config: ChartConfig
}

const ChartContext = React.createContext<ChartContextProps | null>(null)

function useChart() {
  const context = React.useContext(ChartContext)

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />")
  }

  return context
}

const ChartContainer = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    config: ChartConfig
    children: React.ComponentProps<
      typeof RechartsPrimitive.ResponsiveContainer
    >["children"]
  }
>(({ id, className, children, config, ...props }, ref) => {
  const uniqueId = React.useId()
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        ref={ref}
        className={cn(
          "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
          className
        )}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>
          {children}
        </RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  )
})
ChartContainer.displayName = "Chart"

const ChartStyle = ({ id, config }: { id: string; config: ChartConfig }) => {
  const colorConfig = Object.entries(config).filter(
    ([_, config]) => config.theme || config.color
  )

  if (!colorConfig.length) {
    return null
  }

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(
            ([theme, prefix]) => `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, itemConfig]) => {
    const color =
      itemConfig.theme?.[theme as keyof typeof itemConfig.theme] ||
      itemConfig.color
    return color ? `  --color-${key}: ${color};` : null
  })
  .join("\n")}
}
`
          )
          .join("\n"),
      }}
    />
  )
}

const ChartTooltip = RechartsPrimitive.Tooltip

const ChartTooltipContent = React.forwardRef<HTMLDivElement, {
  payload?: unknown;
  className?: string;
  label?: unknown;
  labelFormatter?: unknown;
}>(
  (
    {
      payload,
      className,
      label,
      labelFormatter,
    },
    ref
  ) => {
    const { indicator = "dot", hideLabel = false, hideIndicator = false, nameKey, labelKey, labelClassName, formatter, color } = useChartTooltipCustom();
    const { config } = useChart();

    // Always call useMemo at the top
    const tooltipLabel = React.useMemo(() => {
      if (!Array.isArray(payload) || payload.length === 0 || hideLabel) {
        return null;
      }
      const [item] = payload;
      let key = 'value';
      if (item && typeof item === 'object') {
        if (labelKey && labelKey in item && typeof (item as Record<string, unknown>)[labelKey] === 'string') {
          key = (item as Record<string, string>)[labelKey];
        } else if ('dataKey' in item && typeof (item as Record<string, unknown>).dataKey === 'string') {
          key = (item as Record<string, string>).dataKey;
        } else if ('name' in item && typeof (item as Record<string, unknown>).name === 'string') {
          key = (item as Record<string, string>).name;
        }
      }
      const itemConfig = getPayloadConfigFromPayload(config, item, key);
      const value =
        !labelKey && typeof label === "string"
          ? config[label as keyof typeof config]?.label || label
          : itemConfig?.label;
      const safeLabelFormatter = typeof labelFormatter === 'function' ? labelFormatter : undefined;
      if (safeLabelFormatter) {
        return (
          <div className={cn("font-medium", labelClassName)}>
            {safeLabelFormatter(value, payload)}
          </div>
        );
      }
      if (!value) {
        return null;
      }
      return <div className={cn("font-medium", labelClassName)}>{value}</div>;
    }, [label, labelFormatter, payload, hideLabel, labelClassName, config, labelKey]);

    if (!Array.isArray(payload) || payload.length === 0) {
      return null;
    }

    const nestLabel = payload.length === 1 && indicator !== "dot";

    return (
      <div
        ref={ref}
        className={cn(
          "grid min-w-[8rem] items-start gap-1.5 rounded-lg border border-border/50 bg-background px-2.5 py-1.5 text-xs shadow-xl",
          className
        )}
      >
        {!nestLabel ? tooltipLabel : null}
        <div className="grid gap-1.5">
          {payload.map((item, index) => {
            if (!item || typeof item !== 'object') return null;
            let key = 'value';
            if (nameKey && nameKey in item && typeof (item as Record<string, unknown>)[nameKey] === 'string') {
              key = (item as Record<string, string>)[nameKey];
            } else if ('name' in item && typeof (item as Record<string, unknown>).name === 'string') {
              key = (item as Record<string, string>).name;
            } else if ('dataKey' in item && typeof (item as Record<string, unknown>).dataKey === 'string') {
              key = (item as Record<string, string>).dataKey;
            }
            const itemConfig = getPayloadConfigFromPayload(config, item, key);
            let indicatorColor = color;
            if ('payload' in item && item.payload && typeof item.payload === 'object' && 'fill' in item.payload) {
              indicatorColor = (item.payload as { fill?: string }).fill || indicatorColor;
            }
            if ('color' in item && typeof item.color === 'string') {
              indicatorColor = item.color;
            }
            return (
              <div
                key={'dataKey' in item ? (item as { dataKey?: string }).dataKey : key}
                className={cn(
                  "flex w-full flex-wrap items-stretch gap-2 [&>svg]:h-2.5 [&>svg]:w-2.5 [&>svg]:text-muted-foreground",
                  indicator === "dot" && "items-center"
                )}
              >
                {formatter && 'value' in item && 'name' in item && typeof item.name === 'string' ? (
                  formatter((item as { value?: unknown; name?: string }).value, (item as { name?: string }).name, item, index, 'payload' in item ? item.payload : undefined)
                ) : (
                  <>
                    {itemConfig?.icon ? (
                      <itemConfig.icon />
                    ) : (
                      !hideIndicator && (
                        <div
                          className={cn(
                            "shrink-0 rounded-[2px] border-[--color-border] bg-[--color-bg]",
                            {
                              "h-2.5 w-2.5": indicator === "dot",
                              "w-1": indicator === "line",
                              "w-0 border-[1.5px] border-dashed bg-transparent":
                                indicator === "dashed",
                              "my-0.5": nestLabel && indicator === "dashed",
                            }
                          )}
                          style={
                            {
                              "--color-bg": indicatorColor,
                              "--color-border": indicatorColor,
                            } as React.CSSProperties
                          }
                        />
                      )
                    )}
                    <div
                      className={cn(
                        "flex flex-1 justify-between leading-none",
                        nestLabel ? "items-end" : "items-center"
                      )}
                    >
                      <div className="grid gap-1.5">
                        {nestLabel ? tooltipLabel : null}
                        <span className="text-muted-foreground">
                          {itemConfig?.label || ('name' in item && typeof item.name === 'string' ? item.name : undefined)}
                        </span>
                      </div>
                      {'value' in item && typeof item.value === 'number' && (
                        <span className="font-mono font-medium tabular-nums text-foreground">
                          {item.value.toLocaleString()}
                        </span>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);
ChartTooltipContent.displayName = "ChartTooltip";

const ChartLegend = RechartsPrimitive.Legend

const ChartLegendContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentProps<"div"> & {
    payload?: unknown[];
    verticalAlign?: string;
    hideIcon?: boolean;
    nameKey?: string;
  }
>(
  (
    { className, hideIcon = false, payload = [], verticalAlign = "bottom", nameKey },
    ref
  ) => {
    const { config } = useChart();

    if (!Array.isArray(payload) || payload.length === 0) {
      return null;
    }

    return (
      <div
        ref={ref}
        className={cn(
          "flex items-center justify-center gap-4",
          verticalAlign === "top" ? "pb-3" : "pt-3",
          className
        )}
      >
        {payload.map((item) => {
          if (!item || typeof item !== 'object') return null;
          const key = `${nameKey || ('dataKey' in item && typeof item.dataKey === 'string' ? item.dataKey : 'value')}`;
          const itemConfig = getPayloadConfigFromPayload(config, item, key);
          return (
            <div
              key={'value' in item ? (item as { value?: string | number }).value : key}
              className={cn(
                "flex items-center gap-1.5 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:text-muted-foreground"
              )}
            >
              {itemConfig?.icon && !hideIcon ? (
                <itemConfig.icon />
              ) : (
                <div
                  className="h-2 w-2 shrink-0 rounded-[2px]"
                  style={{
                    backgroundColor: 'color' in item && typeof item.color === 'string' ? item.color : undefined,
                  }}
                />
              )}
              {itemConfig?.label}
            </div>
          );
        })}
      </div>
    );
  }
);
ChartLegendContent.displayName = "ChartLegend";

// Helper to extract item config from a payload.
function getPayloadConfigFromPayload(
  config: ChartConfig,
  payload: unknown,
  key: string
) {
  if (typeof payload !== "object" || payload === null) {
    return undefined
  }

  const payloadPayload =
    "payload" in payload &&
    typeof payload.payload === "object" &&
    payload.payload !== null
      ? payload.payload
      : undefined

  let configLabelKey: string = key

  if (
    key in payload &&
    typeof payload[key as keyof typeof payload] === "string"
  ) {
    configLabelKey = payload[key as keyof typeof payload] as string
  } else if (
    payloadPayload &&
    key in payloadPayload &&
    typeof payloadPayload[key as keyof typeof payloadPayload] === "string"
  ) {
    configLabelKey = payloadPayload[
      key as keyof typeof payloadPayload
    ] as string
  }

  return configLabelKey in config
    ? config[configLabelKey]
    : config[key as keyof typeof config]
}

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
  ChartStyle,
}
