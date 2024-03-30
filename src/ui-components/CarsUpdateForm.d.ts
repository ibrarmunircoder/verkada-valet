/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Cars } from "../API.ts";
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
export declare type CarsUpdateFormInputValues = {
    licensePlateNum?: string;
    userId?: string;
    carMaker?: string;
    carModel?: string;
    color?: string;
    year?: number;
};
export declare type CarsUpdateFormValidationValues = {
    licensePlateNum?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
    carMaker?: ValidationFunction<string>;
    carModel?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
    year?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarsUpdateFormOverridesProps = {
    CarsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    licensePlateNum?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    carMaker?: PrimitiveOverrideProps<TextFieldProps>;
    carModel?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarsUpdateFormProps = React.PropsWithChildren<{
    overrides?: CarsUpdateFormOverridesProps | undefined | null;
} & {
    licensePlateNum?: string;
    cars?: Cars;
    onSubmit?: (fields: CarsUpdateFormInputValues) => CarsUpdateFormInputValues;
    onSuccess?: (fields: CarsUpdateFormInputValues) => void;
    onError?: (fields: CarsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarsUpdateFormInputValues) => CarsUpdateFormInputValues;
    onValidate?: CarsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CarsUpdateForm(props: CarsUpdateFormProps): React.ReactElement;
