import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  
  return(
    <VStack backgroundColor={'white'} rounded={'2xl'}>
      <Image
        src={imageSrc}
        rounded={'2xl'}
      />
      <VStack padding={5} align={'left'}>
        <Heading color={'black'} size={'md'}>{title}</Heading>
        <Text color={'#919191'}>{description}</Text>

        <HStack justifyContent={'start'}>
          <Text color={'black'} as={'b'}>See more</Text>
          <FontAwesomeIcon icon={faArrowRight} color={'black'} size="1x"/>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default Card;
