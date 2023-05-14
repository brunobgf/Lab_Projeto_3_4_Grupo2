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

  const { values, handleChange, setValues } = useFormTemplate(
    defaultValues,
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
    query.benefitId
      ? handleEditBenefit(
        String(query.benefitId),
        values.name,
        values.price,
        values.description,
        fullImage,
      )
      : handleAddBenefit(
        values.name,
        values.price,
        values.description,
        base64Image,
      );
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
            />
          <TextField
            label="Preço"
            value={values.price}
            onChange={handleChange("price")}
          />
          </S.TextFieldWrapper>
          <TextField
              label="Descrição"
              value={values.description}
              onChange={handleChange("description")}
            />
            <VSpace height={20} />
            <ImageUpload
                setBase64Image={setBase64Image}
            />
          <VSpace height={30} />
          <Button onClick={testToast}>Salvar</Button>
        </>
      )}
    </FormLayout>
  );
};

export default RegisterBenefit;
