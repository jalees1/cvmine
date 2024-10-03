import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Zap } from "lucide-react"

export default function CVBuilderLanding() {
  return (
    <div className="container mx-auto px-4 py-16 text-center">
      <h1 className="text-4xl font-bold mb-4">
        The best AI Powered CV Builder in the Industry
      </h1>
      <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
        Ditch the docs or docx, forget the formatting, create ATS-crushing Resumes with ease and experience the power of LaTeX.
      </p>
      
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Zap className="w-6 h-6 mr-2 text-blue-500" />
              AI-Powered
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Advanced AI crafts compelling, tailored resumes.
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Zap className="w-6 h-6 mr-2 text-blue-500" />
              ATS Optimized
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              Engineers to pass Applicant Tracking Systems, especially for TALLITE global ATS.
            </p>
          </CardContent>
        </Card>

        <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
          <CardHeader>
            <CardTitle className="flex items-center justify-center">
              <Zap className="w-6 h-6 mr-2 text-blue-500" />
              Professional Design
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">
              With supporting text below as a natural lead-in to additional content.
            </p>
          </CardContent>
        </Card>
      </div>

      <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold">
        Build now
      </Button>
    </div>
  )
}