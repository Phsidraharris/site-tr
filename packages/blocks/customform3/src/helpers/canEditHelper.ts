interface CanEdit {
  isSeller: boolean;
  isAcceptingProcess: boolean;
  isMemorandumOfSaleCompleted: boolean;
  isRevisionProcess: boolean;
  selectedMemorandumOfSaleId: string | null
}

export const canEdit = ({
  isSeller,
  isAcceptingProcess,
  isMemorandumOfSaleCompleted,
  isRevisionProcess,
  selectedMemorandumOfSaleId,
}: CanEdit) => {
  const isCreationProcess = !!selectedMemorandumOfSaleId;

  const isMemorandumOfSaleAcceptedRejected =
    !isAcceptingProcess && isMemorandumOfSaleCompleted;

  const canEditSellerSectionForm =
    (isSeller && !isMemorandumOfSaleCompleted) || isRevisionProcess;

  const canEditBuyerSectionForm = !isSeller && !isMemorandumOfSaleCompleted;

  return {
    isSeller,
    isAcceptingProcess,
    isMemorandumOfSaleCompleted,
    isRevisionProcess,
    isCreationProcess,
    isMemorandumOfSaleAcceptedRejected,
    canEditSellerSectionForm,
    canEditBuyerSectionForm,
  };
};
