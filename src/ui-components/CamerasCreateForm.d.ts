/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CamerasCreateFormInputValues = {
    cameraId?: string;
    userId?: string;
    organizationName?: string;
};
export declare type CamerasCreateFormValidationValues = {
    cameraId?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
    organizationName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CamerasCreateFormOverridesProps = {
    CamerasCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cameraId?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    organizationName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CamerasCreateFormProps = React.PropsWithChildren<{
    overrides?: CamerasCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CamerasCreateFormInputValues) => CamerasCreateFormInputValues;
    onSuccess?: (fields: CamerasCreateFormInputValues) => void;
    onError?: (fields: CamerasCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CamerasCreateFormInputValues) => CamerasCreateFormInputValues;
    onValidate?: CamerasCreateFormValidationValues;
} & React.CSSProperties>;
export default function CamerasCreateForm(props: CamerasCreateFormProps): React.ReactElement;
