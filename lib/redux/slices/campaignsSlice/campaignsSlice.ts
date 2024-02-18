/* Core */
import { createSlice } from "@reduxjs/toolkit";
import { fetchCampaigns } from "./thunks";
import { CampaignModel } from "@/types/campaignModel";

/* Instruments */
const initialState: CampaignsSliceState = {
  campaigns: [],
  status: "idle"
};

export const campaignsSlice = createSlice({
  name: "campaigns",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCampaigns.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCampaigns.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.campaigns = action.payload;
      })
      .addCase(fetchCampaigns.rejected, (state) => {
        state.status = "failed";
      });
  },
});

/* Types */
export interface CampaignsSliceState {
  campaigns: CampaignModel[];
  status: "idle" | "loading" | "succeeded" | "failed";
}
