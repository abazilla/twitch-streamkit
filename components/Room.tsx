"use client";

import React, { ReactNode } from "react";
import { LiveblocksProvider, RoomProvider, ClientSideSuspense } from "@liveblocks/react/suspense";

export function Room({ children }: { children: ReactNode }) {
	return (
		<LiveblocksProvider
			publicApiKey={"pk_dev_8PQQZaNQ2Nf-eK4aj26QOj73luXtK6FlZzeQABa9tOfl6awCjoLUf7KIp2bA2DLP"}
		>
			<RoomProvider id="my-room">
				<ClientSideSuspense fallback={<div>Loading…</div>}>{children}</ClientSideSuspense>
			</RoomProvider>
		</LiveblocksProvider>
	);
}
