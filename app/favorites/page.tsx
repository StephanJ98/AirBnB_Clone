import React from 'react'
import getCurrentUser from '../actions/getCurrectUser'
import ClientOnly from '../components/ClientOnly'
import EmptyState from '../components/EmptyState'
import getFavoriteListings from '../actions/getFavoriteListings'
import FavoritesClient from '../components/Favorites/FavoritesClient'

type Props = {}

export default async function FavoritesPage({ }: Props) {
    const currentUser = await getCurrentUser()
    const listings = await getFavoriteListings()

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

    if (listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState
                    title='No favorites found'
                    subtitle="Looks like you have no favorite listings."
                />
            </ClientOnly>
        )
    }
    return (
        <ClientOnly>
            <FavoritesClient
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    )
}