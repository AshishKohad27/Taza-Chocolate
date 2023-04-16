import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
  Text,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Nutrition() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const OverlayTwo = () => <ModalOverlay bg="red" />;

  const [overlay, setOverlay] = useState(<OverlayTwo />);

  return (
    <>
      <Button
        ml="4"
        onClick={() => {
          OverlayTwo();
          onOpen();
        }}
      >
        View Nutrition Information
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay
      bg='rgba(0,220,250,0.7)'
    //   backdropFilter='blur(10px) hue-rotate(90deg)'
    />
        <ModalContent  w="100%" >
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody bg="" w="100%">
            <Text>Custom backdrop filters!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
