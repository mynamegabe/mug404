from config import GEMINI_API_KEY
from google.genai import types
from google import genai
from pydantic import BaseModel

client = genai.Client(api_key=GEMINI_API_KEY)

# Create the model
generation_config = {
  "temperature": 1,
  "top_p": 0.95,
  "top_k": 40,
  "max_output_tokens": 8192,
  "response_mime_type": "text/json",
}

class Question(BaseModel):
    question: str
    options: list[str]
    answer: str

class SnapResponse(BaseModel):
    question: str
    steps: list[str]
    answer: str
    questions: list[Question]

def analyze_question(image_bytes: bytes) -> str:
    """
    Analyze a question using the Gemini model.
    """
    response = client.models.generate_content(
    model='gemini-2.5-flash',
    contents=[
        types.Part.from_bytes(
            data=image_bytes,
            mime_type='image/jpeg',
        ),
        'Extract the question from the image and provide a detailed step-by-step solution.',
        'Generate 3 quiz questions relevant to the concepts tested in the given question',
        # 'The answer should be in plaintext JSON format with the following structure: {"question": "extracted question", "steps": ["step 1", "step 2", ...], "answer": "elaboration on question and final answer"} '
    ],
    config={
        "response_mime_type": "application/json",
        "response_schema": SnapResponse,
    }
    )
    print(response.parsed)
    snap_response: SnapResponse = response.parsed
    return snap_response