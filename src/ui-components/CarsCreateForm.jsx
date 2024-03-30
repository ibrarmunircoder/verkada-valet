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
import { createCars } from "../graphql/mutations";
const client = generateClient();
export default function CarsCreateForm(props) {
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
    licensePlateNum: "",
    userId: "",
    carMaker: "",
    carModel: "",
    color: "",
    year: "",
  };
  const [licensePlateNum, setLicensePlateNum] = React.useState(
    initialValues.licensePlateNum
  );
  const [userId, setUserId] = React.useState(initialValues.userId);
  const [carMaker, setCarMaker] = React.useState(initialValues.carMaker);
  const [carModel, setCarModel] = React.useState(initialValues.carModel);
  const [color, setColor] = React.useState(initialValues.color);
  const [year, setYear] = React.useState(initialValues.year);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setLicensePlateNum(initialValues.licensePlateNum);
    setUserId(initialValues.userId);
    setCarMaker(initialValues.carMaker);
    setCarModel(initialValues.carModel);
    setColor(initialValues.color);
    setYear(initialValues.year);
    setErrors({});
  };
  const validations = {
    licensePlateNum: [{ type: "Required" }],
    userId: [{ type: "Required" }],
    carMaker: [{ type: "Required" }],
    carModel: [{ type: "Required" }],
    color: [{ type: "Required" }],
    year: [{ type: "Required" }],
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
          licensePlateNum,
          userId,
          carMaker,
          carModel,
          color,
          year,
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
            query: createCars.replaceAll("__typename", ""),
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
      {...getOverrideProps(overrides, "CarsCreateForm")}
      {...rest}
    >
      <TextField
        label="License plate num"
        isRequired={true}
        isReadOnly={false}
        value={licensePlateNum}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              licensePlateNum: value,
              userId,
              carMaker,
              carModel,
              color,
              year,
            };
            const result = onChange(modelFields);
            value = result?.licensePlateNum ?? value;
          }
          if (errors.licensePlateNum?.hasError) {
            runValidationTasks("licensePlateNum", value);
          }
          setLicensePlateNum(value);
        }}
        onBlur={() => runValidationTasks("licensePlateNum", licensePlateNum)}
        errorMessage={errors.licensePlateNum?.errorMessage}
        hasError={errors.licensePlateNum?.hasError}
        {...getOverrideProps(overrides, "licensePlateNum")}
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
              licensePlateNum,
              userId: value,
              carMaker,
              carModel,
              color,
              year,
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
        label="Car maker"
        isRequired={true}
        isReadOnly={false}
        value={carMaker}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              licensePlateNum,
              userId,
              carMaker: value,
              carModel,
              color,
              year,
            };
            const result = onChange(modelFields);
            value = result?.carMaker ?? value;
          }
          if (errors.carMaker?.hasError) {
            runValidationTasks("carMaker", value);
          }
          setCarMaker(value);
        }}
        onBlur={() => runValidationTasks("carMaker", carMaker)}
        errorMessage={errors.carMaker?.errorMessage}
        hasError={errors.carMaker?.hasError}
        {...getOverrideProps(overrides, "carMaker")}
      ></TextField>
      <TextField
        label="Car model"
        isRequired={true}
        isReadOnly={false}
        value={carModel}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              licensePlateNum,
              userId,
              carMaker,
              carModel: value,
              color,
              year,
            };
            const result = onChange(modelFields);
            value = result?.carModel ?? value;
          }
          if (errors.carModel?.hasError) {
            runValidationTasks("carModel", value);
          }
          setCarModel(value);
        }}
        onBlur={() => runValidationTasks("carModel", carModel)}
        errorMessage={errors.carModel?.errorMessage}
        hasError={errors.carModel?.hasError}
        {...getOverrideProps(overrides, "carModel")}
      ></TextField>
      <TextField
        label="Color"
        isRequired={true}
        isReadOnly={false}
        value={color}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              licensePlateNum,
              userId,
              carMaker,
              carModel,
              color: value,
              year,
            };
            const result = onChange(modelFields);
            value = result?.color ?? value;
          }
          if (errors.color?.hasError) {
            runValidationTasks("color", value);
          }
          setColor(value);
        }}
        onBlur={() => runValidationTasks("color", color)}
        errorMessage={errors.color?.errorMessage}
        hasError={errors.color?.hasError}
        {...getOverrideProps(overrides, "color")}
      ></TextField>
      <TextField
        label="Year"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={year}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              licensePlateNum,
              userId,
              carMaker,
              carModel,
              color,
              year: value,
            };
            const result = onChange(modelFields);
            value = result?.year ?? value;
          }
          if (errors.year?.hasError) {
            runValidationTasks("year", value);
          }
          setYear(value);
        }}
        onBlur={() => runValidationTasks("year", year)}
        errorMessage={errors.year?.errorMessage}
        hasError={errors.year?.hasError}
        {...getOverrideProps(overrides, "year")}
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
