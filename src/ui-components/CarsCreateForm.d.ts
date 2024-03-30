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
export declare type CarsCreateFormInputValues = {
    licensePlateNum?: string;
    userId?: string;
    carMaker?: string;
    carModel?: string;
    color?: string;
    year?: number;
};
export declare type CarsCreateFormValidationValues = {
    licensePlateNum?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
    carMaker?: ValidationFunction<string>;
    carModel?: ValidationFunction<string>;
    color?: ValidationFunction<string>;
    year?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CarsCreateFormOverridesProps = {
    CarsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    licensePlateNum?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    carMaker?: PrimitiveOverrideProps<TextFieldProps>;
    carModel?: PrimitiveOverrideProps<TextFieldProps>;
    color?: PrimitiveOverrideProps<TextFieldProps>;
    year?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CarsCreateFormProps = React.PropsWithChildren<{
    overrides?: CarsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CarsCreateFormInputValues) => CarsCreateFormInputValues;
    onSuccess?: (fields: CarsCreateFormInputValues) => void;
    onError?: (fields: CarsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CarsCreateFormInputValues) => CarsCreateFormInputValues;
    onValidate?: CarsCreateFormValidationValues;
} & React.CSSProperties>;
export default function CarsCreateForm(props: CarsCreateFormProps): React.ReactElement;
