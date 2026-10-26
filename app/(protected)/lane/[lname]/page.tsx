"use client";

import { useState } from "react";
import { Stack, Grid, Typography, Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import UiButton from "@/components/ui/UiButton";
import Feed from "@/components/feed/Feed";
import AdTile from "@/components/ads/AdTile";
import ShareButton from "@/components/feed/components/ShareButton";
import ReplyIcon from "@mui/icons-material/Reply";
import type { ActionType } from "@/components/ui/UiModal";
import UiModal from "@/components/ui/UiModal";
import Link from "next/link";

const Lane = () => {
  const [value, setValue] = useState<string>("2");
  const [modalOpen, setModalOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<ActionType | null>(null);

  const handleChange = (e: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const handleOpenModal = (action: ActionType): void => {
    setActiveAction(action);
    setModalOpen(true);
  };

  const handleCloseModal = (): void => {
    setModalOpen(false);
  };

  return (
    <>
      <Grid
        spacing={3}
        className="bg-gray-50 max-h-svh p-5 my-3 rounded-2xl border border-gray-100"
      >
        <Grid size={12}>
          <Grid size={12}></Grid>
          <Grid container size={12}>
            <Grid size={10}>
              <Stack direction={"column"} spacing={2}>
                <Typography variant="h3">
                  The journey to the end of the Earth
                </Typography>
                <Typography>The journey to the end of the Earth</Typography>
                <Typography variant="h6">
                  8 Contributors | 5.5K Followers
                </Typography>
              </Stack>
            </Grid>
            <Grid size={2} className="flex items-center gap-2">
              <ShareButton />
              <UiButton
                type="button"
                variant="contained"
                color="secondary"
                btnText="Follow Lane"
                fullWidth={false}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid container size={12}>
          <Grid size={8} className="max-h-svh">
            <Box>
              <TabContext value={value}>
                <TabList onChange={handleChange}>
                  <Tab label="About" value={"1"} />
                  <Tab label="Posts" value={"2"} />
                  <Tab label="Questions" value={"3"} />
                </TabList>

                <TabPanel value="1" tabIndex={0}>
                  <h1>About</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In,
                    consequuntur? A nesciunt sapiente ullam incidunt sed, quia
                    nulla illum ab est beatae architecto ducimus. Odit, quisquam
                    aspernatur unde sapiente eligendi autem molestiae a
                    laboriosam dolor enim cum recusandae minima veniam labore
                    blanditiis, corrupti mollitia ratione! Aspernatur libero
                    dicta unde fuga molestias laboriosam sapiente ut, ducimus
                    ullam porro corporis commodi ipsam pariatur sed placeat
                    consectetur accusamus earum voluptates explicabo
                    voluptatibus saepe dignissimos quos facilis illum. Pariatur
                    facere aut asperiores veritatis impedit iste nesciunt iusto
                    officiis autem itaque maiores eligendi esse sapiente quos
                    doloremque laudantium consequatur in corrupti, perspiciatis
                    repellendus dolorem a!
                  </p>
                </TabPanel>

                <TabPanel value="2" tabIndex={1}>
                  <Feed />
                </TabPanel>

                <TabPanel value="3" tabIndex={1}>
                  <Stack direction={"column"} spacing={3}>
                    <Box className="bg-blue-100 p-2 m-2 rounded-lg">
                      <Box className="flex justify-between">
                        <Typography variant="h6">
                          What is the meaning of Deep space?
                        </Typography>

                        <Link
                          href="/answers"
                          className="text-sm text-purple-500 hover:underline"
                        >
                          {7} Answers
                        </Link>
                      </Box>
                      <Box>
                        <UiButton
                          type="button"
                          variant="outlined"
                          btnText="Answer"
                          color="secondary"
                          icon={<ReplyIcon />}
                          fullWidth={true}
                          onClick={() => handleOpenModal("ask")}
                        />

                        <UiButton
                          type="button"
                          variant="outlined"
                          btnText="Throw"
                          color="secondary"
                          icon={<ReplyIcon />}
                          fullWidth={true}
                          onClick={() => handleOpenModal("ask")}
                        />
                      </Box>
                    </Box>
                  </Stack>
                </TabPanel>
              </TabContext>
            </Box>
          </Grid>
          <Grid size={4} className="p-3">
            <Typography variant="h6">Advertisements</Typography>
            <AdTile src="/images/coke.jpg" />
            <AdTile src="/images/lays.jpg" />
          </Grid>
        </Grid>
      </Grid>

      <UiModal
        open={modalOpen}
        onClose={handleCloseModal}
        type={activeAction}
      />
    </>
  );
};

export default Lane;
