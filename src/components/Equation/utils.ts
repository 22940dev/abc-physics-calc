import { decompressedFormulaVariables } from "utils";

export const mapInitialInputState = (
  variables: (string | string[])[] | undefined
) =>
  (variables || []).map(
    (n, i) =>
      decompressedFormulaVariables(variables).map((field: any, index) => {
        if (i === index && !!field.value) return field.value;
        return "";
      })[i]
  );

// For distinguishing which input has which select
export const mapSelectIndexes = (
  variables: (string | string[])[] | undefined
) =>
  (variables || [])
    .map(
      (v, i) =>
        typeof v !== "string" && {
          inputIndex: i
        }
    )
    .filter(v => v)
    .map((v, i) => ({
      ...v,
      selectIndex: i
    }));

export const mapInitialSelectState = (
  selectIndexes: (
    | { selectIndex: number }
    | { selectIndex: number; inputIndex: number }
  )[]
) => Array.from({ length: selectIndexes.length }, () => 1);

export const mapModifiedValues = (
  values: (string | number)[],
  index: number,
  modifiedValue: number | string
): (string | number)[] =>
  values.map((v: number | string, i: number) =>
    i === index ? modifiedValue : v
  );
