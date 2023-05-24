import Button from "@/components/Button";
import TextField from "@/components/TextField";
import ImageUpload from "@/components/ImageUploader";
import Upload from "@/components/Upload";
import { Buffer } from 'buffer';
import { VSpace } from "@/components/VSpace/styles";
import { useFormTemplate } from "@/hooks/useForm";
import router, { useRouter } from "next/router";
import * as S from "./styles";
import { useBenefitData } from "@/services/api/benefit";
import apiRoutes from "@/services/routes";
import { useFetch } from "@/utils/reactQuery";
import FormLayout from "@/components/FormLayout";
import FormPageHeader from "@/components/FormPageHeader";
import { useState } from "react";
import Joi from "joi";
import toast from "react-hot-toast";
import Router from "next/router";
import ImageContainer from "@/components/ImageContainer";



const defaultValues = {
 name: "",
 price: "",
 description: "",
 image: "",
};



const RegisterBenefit = () => {
  const { handleAddBenefit, handleEditBenefit } = useBenefitData();
  const { query } = useRouter();

  const [base64Image, setBase64Image] = useState('');

  const fieldsValidations = {
    name: Joi.string().required().messages({
      "string.empty": `Este campo é obrigatório`,
    }),
    price: Joi.number().min(0).required().messages({
      "number.base": `O campo de moedas precisa ser um número`,
      "number.min": `O campo de moedas não pode ser negativo`,
      "number.max": `O campo de moedas é superior ao que existe de moedas disponíveis`,
      "any.required": `Este campo é obrigatório`,
    }),
    description: Joi.string().required().messages({
      "string.empty": `Este campo é obrigatório`,
    }),
  };

  const { values, handleChange, setValues, errors, formValidate } = useFormTemplate(
    defaultValues,
    fieldsValidations,
    {}
  );

  let { isLoading } = useFetch(
    query.benefitId ? apiRoutes.benefit.benefitById + query.benefitId : "",
    {},
    {
      onSuccess: ({ data }: any) => {
        setValues({ ...data});
      },
    }
  );

  const testToast = () => {
    const decodedImage = Buffer.from(base64Image, 'base64');
    const fullImage = `data:image/jpeg;base64,${decodedImage.toString('base64')}`;

    if (!formValidate()) {
      toast.error("Confira os seus dados");
      return;
    }

    if (!base64Image) {
      toast.error("Imagem é obrigatória.");
      return;    
    }

    query.benefitId
      ? handleEditBenefit(
        String(query.benefitId),
        values.name,
        values.price,
        values.description,
        base64Image,
        "1"
      )

      : handleAddBenefit(     
        values.name,
        values.price,
        values.description,
        base64Image,
        "1"
      );

      Router.reload()
      Router.push("/partner/benefit")   
  };


  return (
    <FormLayout>
      <FormPageHeader title="Benefício" backAction={"/partner/benefit"} />

      {isLoading ? (
        "carregando"
      ) : (
        <>

          <S.TextFieldWrapper>
          <TextField
              label="Nome"
              value={values.name}
              onChange={handleChange("name")}
              error={errors.name && errors.name}
            />
          <TextField
            label="Preço"
            value={values.price}
            onChange={handleChange("price")}
            error={errors.price && errors.price}
          />
          </S.TextFieldWrapper>
          <TextField
              label="Descrição"
              value={values.description}
              onChange={handleChange("description")}
              error={errors.description && errors.description}
            />
            <VSpace height={20} />
            <ImageUpload
                setBase64Image={setBase64Image}
            />
            {values.image && 
            <ImageContainer
                base64String={values.image}
            />}
          <VSpace height={30} />
          <Button onClick={testToast}>Salvar</Button>
        </>
      )}
    </FormLayout>
  );
};

export default RegisterBenefit;
