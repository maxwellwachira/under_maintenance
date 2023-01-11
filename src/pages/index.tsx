import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { ActionIcon, Center, Container, Grid, Group, Stack, Text } from '@mantine/core';
import { useViewportSize } from '@mantine/hooks';

import MainLayout from '../layouts/mainLayout/mainLayout';
import { IconBrandGithub, IconBrandLinkedin, IconBrandTwitter, IconBrandWhatsapp, IconMail } from '@tabler/icons';

const Home: NextPage = () => {
    const { width } = useViewportSize();

    return (
        <>
            <Head>
                <title>Maxwell Wachira</title>
                <meta name="description" content="Maxwell Wachira" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <MainLayout>
                <Container>
                    <Stack style={{ height: width > 768 ? 'calc(100vh - 120px)': 'auto'}} justify="center">
                        <Grid>
                            <Grid.Col md={6}>
                                <Stack style={{ height: width > 768 ? 600 : 'auto' }} justify='center'>
                                    <Text fz={48} fw={600}>Oops!</Text>
                                    <Text fz={30}>Under Maintenance</Text>
                                    <Text mt={30} fz={20}>Get In Touch</Text>
                                    <Group>
                                        <ActionIcon
                                            size="lg"
                                            component='a'
                                            href='https://wa.me/254703519593?text=Hi%20Maxwell%2C%20I%20am%20texting%20from%20your%20portfolio%20website.'
                                            target='_blank'
                                        >
                                            <IconBrandWhatsapp size={28} />
                                        </ActionIcon>
                                        <ActionIcon
                                            size="lg"
                                            component='a'
                                            href='mailto:maxwellwachira67@gmail.com'
                                            target='_blank'
                                        >
                                            <IconMail size={28} />
                                        </ActionIcon>
                                        <ActionIcon
                                            size="lg"
                                            component='a'
                                            href='https://github.com/maxwellwachira/'
                                            target='_blank'
                                        >
                                            <IconBrandGithub size={28} />
                                        </ActionIcon>
                                        <ActionIcon
                                            size="lg"
                                            component='a'
                                            href='https://www.linkedin.com/in/maxwell-wachira-mwangi-273610162/'
                                            target='_blank'
                                        >
                                            <IconBrandLinkedin size={28} />
                                        </ActionIcon>
                                        <ActionIcon
                                            size="lg"
                                            component='a'
                                            href='https://twitter.com/maxwellwachira2'
                                            target='_blank'
                                        >
                                            <IconBrandTwitter size={28} />
                                        </ActionIcon>
                                    </Group>
                                </Stack>
                            </Grid.Col>
                            <Grid.Col md={6}>
                                <Center>
                                    <Image
                                        src="/maintenance.svg"
                                        height={width > 768 ? 500 : 310}
                                        width={width > 768 ? 600 : 310}
                                        alt="Under maintenance"
                                    />
                                </Center>
                            </Grid.Col>
                        </Grid>
                    </Stack>
                </Container>
            </MainLayout>
        </>
    )
}

export default Home;