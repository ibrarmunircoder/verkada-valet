/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Cameras } from "../API.ts";
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
export declare type CamerasUpdateFormInputValues = {
    cameraId?: string;
    userId?: string;
    organizationName?: string;
};
export declare type CamerasUpdateFormValidationValues = {
    cameraId?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
    organizationName?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CamerasUpdateFormOverridesProps = {
    CamerasUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    cameraId?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    organizationName?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CamerasUpdateFormProps = React.PropsWithChildren<{
    overrides?: CamerasUpdateFormOverridesProps | undefined | null;
} & {
    cameraId?: string;
    cameras?: Cameras;
    onSubmit?: (fields: CamerasUpdateFormInputValues) => CamerasUpdateFormInputValues;
    onSuccess?: (fields: CamerasUpdateFormInputValues) => void;
    onError?: (fields: CamerasUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CamerasUpdateFormInputValues) => CamerasUpdateFormInputValues;
    onValidate?: CamerasUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CamerasUpdateForm(props: CamerasUpdateFormProps): React.ReactElement;
