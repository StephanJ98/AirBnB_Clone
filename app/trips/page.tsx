import React from 'react'
import getCurrentUser from '../actions/getCurrectUser'
import ClientOnly from '../components/ClientOnly'
import EmptyState from '../components/EmptyState'
import getReservations from '../actions/getReservations'
import TripsClient from '../components/Trips/TripsClient'

type Props = {}

export default async function TripsPage({ }: Props) {
    const currentUser = await getCurrentUser()

    if (!currentUser) {
        return (
            <ClientOnly>
                <EmptyState
                    title='Unauthorized'
                    subtitle='Please login.'
                />
            </ClientOnly>
        )
    }

    const reservations = await getReservations({ userId: currentUser.id })
    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title='No trips found'
                    subtitle="Looks like you haven't reserved any trips."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <TripsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}