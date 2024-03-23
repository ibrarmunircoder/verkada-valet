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
export declare type OrganizationsCreateFormInputValues = {
    email?: string;
    userId?: string;
    name?: string;
};
export declare type OrganizationsCreateFormValidationValues = {
    email?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrganizationsCreateFormOverridesProps = {
    OrganizationsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrganizationsCreateFormProps = React.PropsWithChildren<{
    overrides?: OrganizationsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: OrganizationsCreateFormInputValues) => OrganizationsCreateFormInputValues;
    onSuccess?: (fields: OrganizationsCreateFormInputValues) => void;
    onError?: (fields: OrganizationsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrganizationsCreateFormInputValues) => OrganizationsCreateFormInputValues;
    onValidate?: OrganizationsCreateFormValidationValues;
} & React.CSSProperties>;
export default function OrganizationsCreateForm(props: OrganizationsCreateFormProps): React.ReactElement;
