import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const data = await request.json();

    const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfV2U6qyWcZzHFESdUn0hGKzfba-MWWrR53Sot2YOpd0J6tFQ/formResponse";

    const formData = new URLSearchParams();
    formData.append("entry.727289475", data.fullName || "");
    formData.append("entry.611921212", data.phone || "");
    formData.append("entry.927057652", data.email || "");
    formData.append("entry.1814520198", data.institute || "");
    formData.append("entry.735463707", data.designation || "");
    formData.append("entry.2025212453", data.message || "");

    const response = await fetch(formUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    // Google Forms usually returns 200 or 302 on success
    if (response.ok || response.status === 302 || response.type === 'opaque') {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json({ success: false, error: 'Failed to submit to Google Forms' }, { status: 500 });
    }
  } catch (error) {
    console.error('Error submitting form:', error);
    return NextResponse.json({ success: false, error: 'Internal Server Error' }, { status: 500 });
  }
}
