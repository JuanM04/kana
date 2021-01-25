import type { ScriptSymbol } from "@kana";

export interface SymbolType extends ScriptSymbol {
  selected: boolean;
}

export interface SetType {
  [key: string]: SymbolType[];
}
