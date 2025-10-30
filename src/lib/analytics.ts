export type GtagEventParams = Record<string, string | number | boolean | undefined>;

type GtagFunction = (command: "event", eventName: string, params?: GtagEventParams) => void;

const getGtag = (): GtagFunction | undefined => {
  if (typeof window === "undefined") {
    return undefined;
  }

  const { gtag } = window as typeof window & { gtag?: GtagFunction };

  return gtag;
};

export const trackEvent = (eventName: string, params?: GtagEventParams) => {
  const gtag = getGtag();

  gtag?.("event", eventName, params);
};
