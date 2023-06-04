export interface Props {
    type?: Variant | number // the type of variant
    className?: string,
    title?: string,
    subtitle?: string,
    btnName?: string,
    btnFunction?: () => void,
    ghostBtnName?: string,
    ghostBtnFunction?: () => void,
}
export type Variant = 'title-breadcrump' | 'title-subtitle' | 'breadcrumb-only' | 'breadcrumb-subtitle' | 'title-with-border' | 'title-only'
export type PageHeaderProps = React.PropsWithChildren & Props
