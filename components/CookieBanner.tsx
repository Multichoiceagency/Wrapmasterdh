'use client'

import { useState, useEffect } from 'react'
import { hasCookie, setCookie } from 'cookies-next'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const hasConsent = hasCookie('cookie-consent')
    setShowBanner(!hasConsent)
  }, [])

  const acceptAll = () => {
    setCookie('cookie-consent', 'accepted')
    setCookie('analytics-cookies', 'accepted')
    setCookie('marketing-cookies', 'accepted')
    setCookie('functional-cookies', 'accepted')
    setShowBanner(false)
  }

  const acceptEssential = () => {
    setCookie('cookie-consent', 'essential')
    setCookie('functional-cookies', 'accepted')
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 bg-background/80 backdrop-blur-sm">
      <Card className="mx-auto max-w-4xl">
        <CardHeader>
          <CardTitle>Cookievoorkeuren</CardTitle>
        </CardHeader>
        <CardContent className="text-sm">
          <p className="mb-4">
            Wij gebruiken cookies om uw ervaring op onze website te verbeteren. 
            Deze cookies worden gebruikt voor essentiële functionaliteit, analyse van websitegebruik 
            en marketingdoeleinden.
          </p>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium">Functionele cookies</h4>
              <p className="text-muted-foreground">
                Deze cookies zijn noodzakelijk voor het functioneren van de website. 
                Zonder deze cookies werkt de website niet optimaal.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Analytische cookies</h4>
              <p className="text-muted-foreground">
                Deze cookies verzamelen anonieme informatie over het gebruik van onze website, 
                zodat we de website kunnen verbeteren.
              </p>
            </div>
            <div>
              <h4 className="font-medium">Marketing cookies</h4>
              <p className="text-muted-foreground">
                Deze cookies worden gebruikt om advertenties relevanter te maken voor u 
                en uw interesses.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row gap-2 sm:gap-4">
          <Button 
            variant="outline" 
            onClick={acceptEssential}
            className="w-full sm:w-auto"
          >
            Alleen essentiële cookies
          </Button>
          <Button 
            onClick={acceptAll}
            className="w-full sm:w-auto"
          >
            Alle cookies accepteren
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

