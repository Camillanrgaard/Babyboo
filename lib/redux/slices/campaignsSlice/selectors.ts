/* Instruments */
import type { ReduxState } from "@/lib/redux";

export const fetchCampaignsStatusSelector = (state: ReduxState) => state.campaigns.status;
export const fetchCampaignsSelector = (state: ReduxState) => state.campaigns.campaigns;