import getCurrentUser from '@/app/actions/getCurrectUser'
import getListingById from '@/app/actions/getListingById'
import getReservations from '@/app/actions/getReservations'
import ClientOnly from '@/app/components/ClientOnly'
import EmptyState from '@/app/components/EmptyState'
import ListingClient from '@/app/components/Listing/ListingClient'
import React from 'react'

type Props = {
    listingId?: string
}

export default async function ListingPage({ params }: { params: Props }) {
    const listing = await getListingById(params)
    const currentUser = await getCurrentUser()
    const reservations = await getReservations(params)

    if (!listing) {
        return (
            <ClientOnly>
                <EmptyState />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <ListingClient
                listing={listing}
                currentUser={currentUser}
                reservations={reservations}
            />
        </ClientOnly>
    )
}