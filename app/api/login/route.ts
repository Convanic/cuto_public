import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    // Forward the request to the PHP backend
    const response = await fetch('http://localhost:8888/cuto_dev/index.php', {
      method: 'POST',
      body: formData,
    });

    const text = await response.text();
    const contentType = response.headers.get('content-type');
    
    // Log response for debugging
    console.log('PHP Response:', text.substring(0, 500));
    
    // Try to parse as JSON
    try {
      const data = JSON.parse(text);
      return NextResponse.json(data, { status: response.status });
    } catch {
      // If not JSON, check if it's a success indicator in the HTML
      // or return a structured response
      if (text.includes('success') || text.includes('erfolgreich') || text.includes('logged')) {
        return NextResponse.json({ success: true, message: 'Login erfolgreich' });
      }
      
      // Return error with the raw response for debugging
      return NextResponse.json(
        { 
          success: false, 
          error: 'Unerwartete Antwort vom Server',
          rawResponse: text.substring(0, 200) 
        },
        { status: 200 }
      );
    }
  } catch (error) {
    console.error('Login proxy error:', error);
    return NextResponse.json(
      { error: 'Backend nicht erreichbar' },
      { status: 500 }
    );
  }
}




