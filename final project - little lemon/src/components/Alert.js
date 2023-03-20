import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { useAlertContext } from "../context/alertContext";
import { useRef } from "react";
import "./styles/Alert.css";

/**
 * This is a global component that uses context to display a global alert message.
 */
function Alert() {
  const { isOpen, type, message, onClose } = useAlertContext();
  const cancelRef = useRef();
  const isSuccess = type === "success"

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={cancelRef}
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent py={4} backgroundColor={isSuccess ? '#81C784' : '#FF8A65'}
          width={'25rem'}
          height={'12rem'}
          className="alert-content"
        >
          <AlertDialogCloseButton className="alert-close" backgroundColor={'red.600'} color={'white'} cursor={'pointer'}></AlertDialogCloseButton>
          <AlertDialogHeader className="alert-header" fontSize="lg" fontWeight="bold">
            {isSuccess ? 'Congratulations!' : 'Ooops!'}
          </AlertDialogHeader>
          <AlertDialogBody textAlign={'justify'}>{message}</AlertDialogBody>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default Alert;
