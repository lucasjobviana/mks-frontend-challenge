import { TProduct, TReactRCProps } from ".";

export type TProductContext = TReactRCProps & {
    products: TProduct[],
    isLoading: boolean
}