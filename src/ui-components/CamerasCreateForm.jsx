/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createCameras } from "../graphql/mutations";
const client = generateClient();
export default function CamerasCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    cameraId: "",
    userId: "",
    organizationName: "",
  };
  const [cameraId, setCameraId] = React.useState(initialValues.cameraId);
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [organizationName, setOrganizationName] = React.useState(
    initialValues.organizationName
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCameraId(initialValues.cameraId);
    setUserId(initialValues.userId);
    setOrganizationName(initialValues.organizationName);
    setErrors({});
  };
  const validations = {
    cameraId: [{ type: "Required" }],
    userId: [{ type: "Required" }],
    organizationName: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          cameraId,
          userId,
          organizationName,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: createCameras.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "CamerasCreateForm")}
      {...rest}
    >
      <TextField
        label="Camera id"
        isRequired={true}
        isReadOnly={false}
        value={cameraId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cameraId: value,
              userId,
              organizationName,
            };
            const result = onChange(modelFields);
            value = result?.cameraId ?? value;
          }
          if (errors.cameraId?.hasError) {
            runValidationTasks("cameraId", value);
          }
          setCameraId(value);
        }}
        onBlur={() => runValidationTasks("cameraId", cameraId)}
        errorMessage={errors.cameraId?.errorMessage}
        hasError={errors.cameraId?.hasError}
        {...getOverrideProps(overrides, "cameraId")}
      ></TextField>
      <TextField
        label="User id"
        isRequired={true}
        isReadOnly={false}
        value={userId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cameraId,
              userId: value,
              organizationName,
            };
            const result = onChange(modelFields);
            value = result?.userId ?? value;
          }
          if (errors.userId?.hasError) {
            runValidationTasks("userId", value);
          }
          setUserId(value);
        }}
        onBlur={() => runValidationTasks("userId", userId)}
        errorMessage={errors.userId?.errorMessage}
        hasError={errors.userId?.hasError}
        {...getOverrideProps(overrides, "userId")}
      ></TextField>
      <TextField
        label="Organization name"
        isRequired={true}
        isReadOnly={false}
        value={organizationName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cameraId,
              userId,
              organizationName: value,
            };
            const result = onChange(modelFields);
            value = result?.organizationName ?? value;
          }
          if (errors.organizationName?.hasError) {
            runValidationTasks("organizationName", value);
          }
          setOrganizationName(value);
        }}
        onBlur={() => runValidationTasks("organizationName", organizationName)}
        errorMessage={errors.organizationName?.errorMessage}
        hasError={errors.organizationName?.hasError}
        {...getOverrideProps(overrides, "organizationName")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
