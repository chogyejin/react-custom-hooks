export const useConfirm = (
  message = "",
  onConfirm: () => void,
  onCancel: () => void
) => {
  const confirmAction = () => {
    if (window.confirm(message)) {
      onConfirm();
    } else {
      onCancel();
    }
  };

  return confirmAction;
};
