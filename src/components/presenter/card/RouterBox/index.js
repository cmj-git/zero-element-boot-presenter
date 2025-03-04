import React from 'react';
import Gridbox from 'zero-element-boot/lib/components/layout/Gridbox';
import CssCart from 'zero-element-boot/lib/components/cart/CssCart';
import { Flex, Center } from '@chakra-ui/react'
import Container from 'zero-element-boot/lib/components/container/Container'
import RouterBoxItem from '../RouterBoxItem';

/**
 * 
 * @param {data} items 数据
 * 
 */
export default function index(props) {

    const { items, columns = '4' } = props


    return (
        <Center bg="#ffffff" w='100%' borderRadius='4px'>
            <Container>
                {
                    items && items.map((item, i) => (
                        <Gridbox columns={columns}>
                            <RouterBoxItem  {...item} key={i} />
                        </Gridbox>
                    )
                    )
                }
            </Container>
        </Center>

    )



}