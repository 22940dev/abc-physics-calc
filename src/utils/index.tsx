import kebabCase from "lodash/kebabCase";
import tokenVariables from "../generated-tokens/astrodynamics/variables.json";
import astrodynamics from "../generated-tokens/astrodynamics/formulas.json";

export const activeEquation = (params: string | undefined) =>
  Object.values(astrodynamics).filter(({ name }) => kebabCase(name) === params);

export const decompressedFormulaVariables = (
  variables: (string | string[])[] | undefined
): object[] =>
  Object.entries(tokenVariables).reduce((acc, [key, value]: any): any => {
    const pureVariable = (variables || []).some(
      (v: string | string[]) => v === key
    );
    let sCat = null;
    const withSelectVariable = (variables || []).some(
      (v: string | string[]) => {
        if (typeof v === "object" && v[0] === key) {
          const [, selectCat] = v[1].split("_");
          sCat = selectCat;
          return true;
        }

        return false;
      }
    );

    if (withSelectVariable) {
      return [...acc, [value, { selectCategory: sCat }]];
    }

    if (pureVariable) return [...acc, value];
    return acc;
  }, []);
