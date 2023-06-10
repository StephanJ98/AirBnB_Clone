import React from 'react'
import getCurrentUser from '../actions/getCurrectUser'
import ClientOnly from '../components/ClientOnly'
import EmptyState from '../components/EmptyState'
import getReservations from '../actions/getReservations'
import ReservationsClient from '../components/Reservations/ReservationsClient'

type Props = {}

export default async function ReservationsPage({ }: Props) {
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

    const reservations = await getReservations({ authorId: currentUser.id })
    if (reservations.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title='No reservations found'
                    subtitle="Looks like you haven no reservations on your properties."
                />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <ReservationsClient
                reservations={reservations}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}