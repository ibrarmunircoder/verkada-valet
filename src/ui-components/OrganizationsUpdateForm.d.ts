/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Organizations } from "../API.ts";
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
export declare type OrganizationsUpdateFormInputValues = {
    email?: string;
    userId?: string;
    name?: string;
};
export declare type OrganizationsUpdateFormValidationValues = {
    email?: ValidationFunction<string>;
    userId?: ValidationFunction<string>;
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type OrganizationsUpdateFormOverridesProps = {
    OrganizationsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    email?: PrimitiveOverrideProps<TextFieldProps>;
    userId?: PrimitiveOverrideProps<TextFieldProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type OrganizationsUpdateFormProps = React.PropsWithChildren<{
    overrides?: OrganizationsUpdateFormOverridesProps | undefined | null;
} & {
    email?: string;
    organizations?: Organizations;
    onSubmit?: (fields: OrganizationsUpdateFormInputValues) => OrganizationsUpdateFormInputValues;
    onSuccess?: (fields: OrganizationsUpdateFormInputValues) => void;
    onError?: (fields: OrganizationsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: OrganizationsUpdateFormInputValues) => OrganizationsUpdateFormInputValues;
    onValidate?: OrganizationsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function OrganizationsUpdateForm(props: OrganizationsUpdateFormProps): React.ReactElement;
